import {bindActionCreators} from 'redux'

export const connect = (
  element,
  mapStateToProps,
  mapDispatchToProps,
  options = {
    providerLocator: () => document.querySelector('store-provider')
  }
) => class Connect extends element {
  connectedCallback () {
    // Connect the element to the store.
    if (options.providerLocator) {
      const provider = options.providerLocator()
      if (provider) {
        const store = provider.store
        if (store) {
          if (mapStateToProps) {
            this.__storeUnsubscribe = store.subscribe(() => this._stateChanged(store.getState()))
            this._stateChanged(store.getState())
          }

          if (mapDispatchToProps) {
            const boundProps = bindActionCreators(mapDispatchToProps, store.dispatch)
            Object.assign(this, boundProps)
          }
        }
      }
    }

    if (super.connectedCallback) {
      super.connectedCallback()
    }
  }

  disconnectedCallback () {
    if (this.__storeUnsubscribe) {
      this.__storeUnsubscribe()
    }

    if (super.disconnectedCallback) {
      super.disconnectedCallback()
    }
  }

  _stateChanged (state) {
    const props = mapStateToProps(state)
    Object.assign(this, props)
  }
}

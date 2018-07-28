const CALL_SERVICE = 'CALL_SERVICE_ACTION'

export default serviceMap => (getState, dispatch) => next => async action => {
  if (action.type === CALL_SERVICE) {
    const {
      service,
      method,
      params,
      context,
      onSuccessActionCreator,
      onFailureActionCreator,
      onCompletionActionCreator
    } = action.payload

    const serviceInstance = serviceMap[service]
    if (!serviceInstance) {
      throw new Error(`No service registered for "${service}"`)
    }
    try {
      const result = await serviceInstance[method](...params)
      if (onSuccessActionCreator) {
        dispatch(onSuccessActionCreator(result, context))
      }
      return result
    } catch (e) {
      if (onFailureActionCreator) {
        dispatch(onFailureActionCreator(e, context))
      } else {
        throw e
      }
    } finally {
      if (onCompletionActionCreator) {
        dispatch(onCompletionActionCreator(context))
      }
    }
  } else {
    next(action)
  }
}

export function callService (
  service,
  method,
  params = [],
  {
    context,
    onSuccessActionCreator,
    onFailureActionCreator,
    onCompletionActionCreator
  } = {}
) {
  if (!service) {
    throw new Error('Missing value for required parameter "service"')
  }

  if (!method) {
    throw new Error('Missing value for required parameter "method"')
  }

  if (!params) {
    throw new Error('Missing value for required parameter "params"')
  }

  return {
    type: CALL_SERVICE,
    payload: {
      service,
      method,
      params,
      context,
      onSuccessActionCreator,
      onFailureActionCreator,
      onCompletionActionCreator
    }
  }
}


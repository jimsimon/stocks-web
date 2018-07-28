export default class NavigationService {
  constructor (router) {
    this.router = router
  }

  navigate (path) {
    this.router.navigate(path)
  }
}

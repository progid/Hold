/*
*	new Router( [ routes ] )
*
*/

class Router {
	constructor(o) {
		this.basename = o.basename || '';
		this.protocol = p.protocol || '';
		this.routes = o.routes || [];
	}

	add(route) {
		if (route instanceof Route) {
			this.routes.push(route);
		}
		return this;
	}

	prepareRoute(route) {
		
	}
	
	prepareRoutes(routes) {

	}
}
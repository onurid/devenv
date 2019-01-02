require.config({
    baseUrl: './app',
    urlArgs: 'v=1.0'
});

require(
    [
        'app',
        'app-services/authentication.service',
        'app-services/flash.service',
        'app-services/user.service',
        'app-services/product.service',
        'app-services/consultancy.service',
        'app-services/dashboard.service',
        'app-services/lemoras.service',
        'app-services/message.service',
        'app-services/payment.service',
        'app-services/settings.service',
        'app-services/user.service.local-storage',
        'module/login/login.controller',
        'module/register/register.controller',
        'module/logout/logout.controller'
    ],
    function () {
        angular.bootstrap(document, ['app']);
    });

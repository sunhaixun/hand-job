requirejs.config({
    baseUrl: 'javascripts/lib',
    paths: {
        js : '../js',
        jqueryPulign : '../jqueryPulign',
        react: "react",
        JSXTransformer: "JSXTransformer",
        backbone : 'backbone-min',
        underscore : 'underscore-min'
    },
    jsx: {
        fileExtension: '.jsx',
        harmony: true,
        stripTypes: true
    }
    
});
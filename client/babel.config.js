module.exports = {
    plugins: [
        ['react-css-modules', {
            filetypes: {
                '.scss': {
                    syntax: 'postcss-scss'
                },
            },
            "webpackHotModuleReloading": true,
            "autoResolveMultipleImports": true,
            "generateScopedName": "[folder]_[local]_[hash:hex:5]"
        }]
    ]
};
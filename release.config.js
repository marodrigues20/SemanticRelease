module.exports = {
    "branches": {name: 'beta', prerelease: true},
    "branches": "main",
    repositoryUrl: "https://github.com/marodrigues20/SemanticRelease",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/github",
            {
                assets: [
                    { path: "SemanticRelease-*.jar", label: "Jar File" }
                ]
            }
        ]
    ]
}
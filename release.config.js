module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/marodrigues20/SemanticRelease",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/github",
            {
                assets: [
                    { path: "SemanticRelease-1.0-SNAPSHOT.jar", label: "Jar File" }
                ]
            }
        ]
    ]
}
module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/marodrigues20/SemanticRelease",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/git"
    ]
}
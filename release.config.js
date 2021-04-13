module.exports = {
    branches: [ 'main', { name: 'beta', prerelease: true }],
    repositoryUrl: "https://github.com/marodrigues20/SemanticRelease",
    debug:true,
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github"
    ]
}
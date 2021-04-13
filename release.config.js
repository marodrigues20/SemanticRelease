module.exports = {
    branches: [{ name: 'beta', prerelease: true }, 'master'],
    repositoryUrl: "https://github.com/marodrigues20/SemanticRelease",
    debug:true,
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github"
    ]
}
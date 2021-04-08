module.exports = {
    "release": {
        "branches": ["master", "next"]
    },
    "beta": {
        "branches": ["beta", "prerelease"]
    },
    repositoryUrl: "https://github.com/marodrigues20/SemanticRelease",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github"
    ]
}
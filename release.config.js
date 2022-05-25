module.export = {
    branches: "main",
    repositoryUrl: "https://github.com/yuvber/github-actions-react-app",
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator', 
        '@semantic-release/github'
    ]
}
module.exports = {
  extends: ["local>trez/renovate-config"],
  hostRules: [
    {
      description: "Docker Hub authentication",
      hostType: "docker",
      matchHost: "docker.io",
      username: process.env.DOCKER_HUB_USER,
      password: process.env.DOCKER_HUB_PASS,
    },
    {
      description: "GitHub Container Registry (GHCR)",
      hostType: "docker",
      matchHost: "ghcr.io",
      username: process.env.GHCR_USER,
      password: process.env.GHCR_TOKEN,
    },
    {
      description: "Self-hosted Gitea Docker Registry",
      hostType: "docker",
      matchHost: "git.trez.wtf",
      username: process.env.GITEA_BOT_USER,
      password: process.env.GITEA_BOT_PASS,
    },
  ],
};

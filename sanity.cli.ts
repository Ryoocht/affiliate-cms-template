import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '36rcvcar',
    dataset: 'production',
  },
  graphql: [
    {
      playground: true,
      tag: 'dev',
    },
  ],
})

export default [
  {
    id: 1500,
    iteration: 10,
    title: 'Create the Movies Project',
    storyPoints: 1,
    task: `Create an ember project in a neighboring folder. Call it 'ember-movies'`,
    acceptanceCriteria: `Does the server start?`
  },
  {
    id: 3000,
    iteration: 10,
    title: 'Create a movies route',
    storyPoints: 1,
    task: `Create an movies route with a header`,
    acceptanceCriteria: `As a user when I go to \`http://localhost:3000/movies\` I expect to see the Movies header`
  }
];

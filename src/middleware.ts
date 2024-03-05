import { CognitoJwtVerifier } from 'aws-jwt-verify';

// Verifier that expects valid access tokens:
// const verifier = CognitoJwtVerifier.create({
//   userPoolId: '<user_pool_id>',
//   tokenUse: 'access',
//   clientId: '<client_id>'
// });

async function handler() {
//   try {
//     const payload = await verifier.verify(
//       'eyJraWQiOiIzcmpzVzVvTUNmY1IyTWszSkdWTHpLaXVXT1BoWUx5MkpMUDBiQlIwcytZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MzhiNmY5ZC02MzIzLTQ3MWYtYTRhOS1hYjM5NzZmOWJmZmYiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xX3JWZ09sMjRQNyIsImNsaWVudF9pZCI6InBsYTN1ZGxkdHRyNmk1a2M0anBnamc4dGciLCJvcmlnaW5fanRpIjoiN2M3NmM4N2ItNmI1MS00YTUxLWFjZWYtYzQ1MzIzZDA0YzMzIiwiZXZlbnRfaWQiOiIxYjBmMzgwMC1kNzIxLTQ5ZDQtYWY2ZC02Y2VlMGNhZmRhMTMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNzA5NjI2MDQyLCJleHAiOjE3MDk2MzM0MDMsImlhdCI6MTcwOTYyOTgwMywianRpIjoiYzdlY2QwMzYtNTVjMi00MTI3LWEzOTctYWJlNzA5M2NlMGE5IiwidXNlcm5hbWUiOiI0MzhiNmY5ZC02MzIzLTQ3MWYtYTRhOS1hYjM5NzZmOWJmZmYifQ.imZPT0hth5rQTsNOamUvxWOj7MlrvXEfb6x_3HAGnLth7cVpp3cVv8cReq4bUxM3TgluLY7sgglA5IkBO6pVGdSkAGub2ZslGgW-vSQCojthW0erNhO0ZJlE3LX7-oQHsz3kNJiyYRCncSBxzA-7REKahYTIzbuzLk6x34lM8OtsLgME5s6JAmbMHKGWFRwzdPGU0rZAhRh1MV3y_GA9u4n-_a14ZTqNikkSb_2UK6tuEHpQqyxcfyfVWNmYDQMsEE-SYOko69NiMpWLbpS8ILsi1RwR8Svlq7kelB5SJbW3xB173yNHOlI7IrT2lVjE39hEAQXh2QuCAxauflft3w' // the JWT as string
//     );
//     console.log('Token is valid. Payload:', payload);
//   } catch {
//     console.log('Token not valid!');
//   }
}

export default handler;

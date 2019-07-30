# github-api-profile

## Normal Mode

Recreate the HTML and CSS for the Github tab page (https://github.com/overthemike?tab=repositories) as your design, and using two AJAX requests/Promises, pull down profile information from Github based on a text input:

- Your profile: `https://api.github.com/users/<username>`
- Your repos: `https://api.github.com/users/<username>/repos`

After loading data from the Github API in express and returning it to your React application, write at least the following information to the Component:

- name
- blog
- location
- email
- an `<img>` with its source as the avatar_url
- html_url
- for each repo owned by your user, list that repo in a `<ul>`

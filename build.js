const fs = require('fs');
const axios = require('axios');

require('dotenv').config()

const workspaceId = process.env.WORKSPACE_ID;
const apiKey = process.env.CLICKUP_KEY

/**
 * Get clickup team members in main workspace*/
async function getMembers() {
  const config = {
    method: 'get',
    url: `https://api.clickup.com/api/v2/team/${workspaceId}`,
    headers: {
      'Authorization': apiKey
    }
  };

  const response = await axios(config)
        .then(function (response) {
          return response.data
        })
        .catch(function (error) {
          console.log(error);
        });
  return response
}

/**
 * Get clickup members emails (.[].user.email), create a file for each one
 * in ./content/members/<email>.md.
 *
 * Each markdown file has the following frontmatter
 *
 * title: <name>
 * extra:
 *   - email: <email>
 *   - initials: <initials>
 *
 */
async function createMemberFiles(members) {
  members.team.members.forEach(member => {
    const email = member.user.email
    const name = member.user.username
    const initials = member.user.initials
    const content = `---
title: ${name}
template: "member.html"
extra:
  email: ${email}
  initials: ${initials}
  color: ${member.user.color}
  id: ${member.user.id}
---`
    fs.writeFileSync(`./content/members/${email}.md`, content)
  })
}

async function main() {
  const members = await getMembers()
  await createMemberFiles(members)
    // const members = await getMembers()
  // console.log(JSON.stringify(members.team.members))
}


main()

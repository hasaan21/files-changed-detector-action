const core = require('@actions/core')
const github = require('@actions/github')


const main = async () => {
  try {
    const owner = core.getInput('owner', { required: true })
    const repo = core.getInput('repo', { required: true })
    const pr_number = core.getInput('pr_number', { required: true })
    const token = core.getInput('token', { required: true })

    const octokit = new github.getOctokit(token)

    const {data: changedFiles} = await octokit.rest.pulls.listFiles({
      owner,
      repo,
      pull_number: pr_number,
    })

    let message = `Pull Request #${pr_number} has been updated with: \n`
    for (const file of changedFiles) {
      message =+ `- ${file.filename}`
    }

    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: pr_number,
      body: message,
    })
  } catch(error){
    core.setFailed(error.message)
  }
}

main();

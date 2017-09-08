module.exports = {
  apps: [{
    name: 'tutorial',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-219-171-61.us-west-1.compute.amazonaws.com',
      key: '~/.ssh/tutorial.pem',
      ref: 'origin/master',
      repo: 'https://github.com/NathanielDake/AWS-intro.git',
      path: '/home/ubuntu/tutorial-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}

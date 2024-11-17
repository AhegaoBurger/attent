# Docker and Supabase Installation Guide

## Installing Docker Engine on Ubuntu

1. Remove any old Docker installations:
```bash
sudo apt-get purge -y docker-desktop docker-ce docker-ce-cli containerd.io docker-compose-plugin docker-ce-rootless-extras docker-buildx-plugin
sudo apt-get autoremove -y

sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
sudo rm -rf ~/.docker
sudo rm -rf /usr/local/lib/docker
```

2. Set up Docker's repository:
```bash
# Install required packages
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg

# Add Docker's official GPG key
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

3. Install Docker Engine:
```bash
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

4. Add your user to the docker group and apply changes:
```bash
sudo usermod -aG docker $USER
newgrp docker
```

5. Verify the installation:
```bash
sudo docker run hello-world
```

You should see a success message from Docker.

## Setting up Supabase Project

1. Initialize a new Supabase project:
```bash
npx supabase init
```

This will create a new `supabase` directory in your project with the following structure:
```
supabase/
  ├── config.toml
  ├── seed.sql
  └── migrations/
```

2. Start the Supabase services:
```bash
npx supabase start
```

This command will:
- Pull necessary Docker images
- Start the Supabase services
- Show you the connection details and credentials

## Common Issues and Solutions

1. If you get permission errors:
```bash
sudo chown -R $USER:$USER ~/.docker
sudo chmod -R g+rwx ~/.docker
```

2. If Docker service isn't running:
```bash
sudo service docker start
```

3. If `supabase start` hangs:
- Make sure Docker service is running
- Check if any ports are conflicting
- Try stopping and starting Docker:
  ```bash
  sudo service docker stop
  sudo service docker start
  ```

## Useful Commands

- Check Docker status:
  ```bash
  docker ps
  ```

- Stop Supabase services:
  ```bash
  npx supabase stop
  ```

- View Supabase logs:
  ```bash
  npx supabase logs
  ```

- Reset Supabase database:
  ```bash
  npx supabase db reset
  ```

## Next Steps

After successful installation, you can:
1. Access the Supabase Studio at the URL provided in the terminal
2. Start creating tables and schemas
3. Use the generated API keys in your application
4. Set up authentication and row-level security

Remember to keep your Docker service running while working with Supabase locally.

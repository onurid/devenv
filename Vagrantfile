
# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

unless Vagrant.has_plugin?("vagrant-docker-compose")
  system("vagrant plugin install vagrant-docker-compose")
  puts "Dependencies installed, please try the command again."
  exit
end

Vagrant.configure("2") do |config|
  
  # VirtualBox.
  config.vm.define "dev" do | dev|
     dev.vm.box = "ubuntu/xenial64"

    # Forward ports
    dev.vm.network "forwarded_port", guest: 80, host: 8080 # web server

    dev.vm.provider :virtualbox do |v|
      v.gui = false
      v.memory = 1024
      v.cpus = 2
    end

    dev.vm.synced_folder './src', '/vagrant'

    dev.vm.provision :shell, inline: "apt-get update"
    dev.vm.provision :docker
    dev.vm.provision :docker_compose, yml: "/vagrant/docker-compose.yml", rebuild: true, run: "always"

    #config.vm.provision "shell", inline: "echo Hello, World"
  end

  # Test.
  config.vm.define "test" do | test |
     test.vm.box = "hashicorp/precise64"

    # Forward ports
    test.vm.network "forwarded_port", guest: 80, host: 8080 # web server

    test.vm.provider :virtualbox do |v|
      v.gui = false
      v.memory = 1024
      v.cpus = 2
    end

    test.vm.synced_folder './src', '/vagrant'

    test.vm.provision :shell, inline: "apt-get update"
    test.vm.provision :docker
    test.vm.provision :docker_compose, yml: "/vagrant/docker-compose.yml", run: "always"

    #config.vm.provision "shell", inline: "echo Hello, World"
  end

  
end

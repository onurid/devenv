
# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

unless Vagrant.has_plugin?("vagrant-docker-compose")
  system("vagrant plugin install vagrant-docker-compose")
  puts "Dependencies installed, please try the command again."
  exit
end

Vagrant.configure("2") do |config|
  
  config.vm.network :private_network, ip: "192.168.68.8"
  
  # Development.
  config.vm.define "dev" do | dev|
     dev.vm.box = "ubuntu/bionic64"
     dev.ssh.forward_agent = true
     dev.ssh.forward_x11 = true 
    dev.vm.provider :virtualbox do |v|
      v.gui = true
      v.memory = 4096
      v.cpus = 4
      #v.customize ["modifyvm", :id, "--audio", "pulse", "--audiocontroller", "ac97"] 
    end
	# xfce4 gui 
    #dev.vm.provision "shell", inline: "sudo apt-get update"
    #dev.vm.provision "shell", inline: "sudo apt-get install -y xfce4 virtualbox-guest-dkms virtualbox-guest-utils virtualbox-guest-x11"
    # Permit anyone to start the GUI
    #dev.vm.provision "shell", inline: "sudo sed -i 's/allowed_users=.*$/allowed_users=anybody/' /etc/X11/Xwrapper.config"

    dev.vm.provision :shell, inline: "sudo add-apt-repository ppa:leaeasy/dde" 
    dev.vm.provision :shell, inline: "sudo apt -y install dde dde-file-manager" 
    dev.vm.provision :shell, inline: "sudo apt -y install deepin-gtk-theme" 

    dev.vm.provision :shell, inline: "sudo apt-get -y install virtualbox-guest-dkms virtualbox-guest-utils virtualbox-guest-x11"
    dev.vm.provision :shell, inline: "sudo apt-get -y update"
    dev.vm.provision :shell, inline: "sudo apt-get -y install build-essential linux-headers-$(uname -r)"
dev.vm.provision :shell, inline: "sudo apt-get -y update"
    
    # Third-party applications
    dev.vm.provision :shell, inline: "apt-get -y install golang"
    dev.vm.provision :shell, inline: "apt-get -y install filezilla"
    dev.vm.provision :shell, inline: "apt-get -y install docker"

    dev.vm.provision :shell, inline: "sudo add-apt-repository ppa:webupd8team/sublime-text-2"
    dev.vm.provision :shell, inline: "sudo apt-get update"
    dev.vm.provision :shell, inline: "sudo apt-get -y install sublime-text"

  end

  # Test.
  config.vm.define "test" do | test |
    test.vm.box = "ubuntu/xenial64"

    # Forward ports
    #test.vm.network "forwarded_port", guest: 80, host: 80 # run with administrator, sudo 
    test.vm.network "forwarded_port", guest: 80, host: 8080 # web server
    test.vm.network "forwarded_port", guest: 8090, host: 8088

    test.vm.provider :virtualbox do |v|
      v.gui = false
      v.memory = 1024
      v.cpus = 2
    end

    test.vm.synced_folder './src', '/vagrant'

    test.vm.provision :shell, inline: "apt-get update"
    test.vm.provision :docker
    test.vm.provision :docker_compose, yml: "/vagrant/docker-compose.yml", rebuild: true, run: "always"
  end

  #config.vm.provision "shell", inline: "echo Hello, World"


  # Dev1.
  config.vm.define "dev1" do | dev|
     dev.vm.box = "ubuntu/bionic64"
     dev.ssh.forward_agent = true
     dev.ssh.forward_x11 = true 
    dev.vm.provider :virtualbox do |v|
      v.gui = true
      v.memory = 4096
      v.cpus = 4
      v.customize ["modifyvm", :id, "--audio", "pulse", "--audiocontroller", "ac97"] 
      v.customize ["modifyvm", :id, "--accelerate3d", "on", "--vram", "128", "--graphicscontroller", "vboxvga"] 
    end

    dev.vm.provision :shell, inline: "sudo add-apt-repository ppa:leaeasy/dde" 
    dev.vm.provision :shell, inline: "sudo apt -y install dde dde-file-manager" 
    dev.vm.provision :shell, inline: "sudo apt -y install deepin-gtk-theme" 

    dev.vm.provision :shell, inline: "sudo apt-get -y install virtualbox-guest-dkms virtualbox-guest-utils virtualbox-guest-x11"
    dev.vm.provision :shell, inline: "sudo apt-get update"
    dev.vm.provision :shell, inline: "sudo apt-get -y install build-essential linux-headers-$(uname -r)"
    dev.vm.provision :shell, inline: "sudo apt-get -y install virtualbox-ose-guest-x11"
    dev.vm.provision :shell, inline: "sudo apt-get -y install virtualbox-guest-additions-iso"
    dev.vm.provision :shell, inline: "sh /media/cdrom/VBoxLinuxAdditions.run"

  end

end

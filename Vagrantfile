Vagrant.configure("2") do |config|
  config.vm.synced_folder '.', '/vagrant', type: 'nfs'

  # VirtualBox.
  config.vm.define "virtualbox" do |virtualbox|
     config.vm.box = "ubuntu/xenial32"
    #virtualbox.vm.network :private_network, ip: "172.16.3.79"

    config.vm.provider :virtualbox do |v|
      v.gui = false
      v.memory = 1024
      v.cpus = 1
      #v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
      #v.customize ["modifyvm", :id, "--ioapic", "on"]
    end

    #config.vm.provision "shell", inline: "echo Hello, World"
  end

end

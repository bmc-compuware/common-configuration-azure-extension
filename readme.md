# BMC Common Configuration


## Overview

The BMC Common Configuration provides configuration settings that are shared by other BMC Azure extensions.

## Prerequisites

The following are required to use this plugin:
- On Premise Azure DevOps Server.

## Installing extensions in a Azure Devops Server Instance

Install the BMC common configuration extension according to the Azure Devops instructions for installing extensions.

## Configuring for Topaz Workbench CLI & Host Connections

![](images/bmccommonconfig.png)

In order to download Endevor, PDS, and ISPW members you will need to point to an installed Topaz Workbench Command Line Interface (CLI). The Topaz Workbench CLI will work with host connection(s) you also need to configure to download Endevor, PDS, and ISPW members.

Navigate to Pipelines and go to Compuware Configurations section.

- **Windows Topaz Workbench CLI home** : Point to the Windows installation location of the CLI. If necessary, change the default values given to match the correct installation location.

- **Linux Topaz Workbench CLI home** : Point to the Linux installation location of the CLI. If necessary, change the default values given to match the correct installation location.

![](docs/images/info.svg) The Topaz Workbench CLI must be installed on the machine that is configured to run the job.

**Host connections**

![](docs/images/info.svg) If no host connection appears in the Host:Port section, select Create New Host Option,add (host:port) in next textbox.

- **Description** : Enter a description of the connection.

- **Host:port** : Enter the z/OS host and port to connect to.

- **Encryption protocol** : Select the desired encryption protocol to be used for this connection. The encryption protocol is used to encrypt data sent to and from the host. The default is \'None\'.

- **Code page** : Select the desired code page to be used for this connection. The code page is used to translate data sent to and from the host. The default is 1047.

- **Read/write timeout (minutes)** : Enter the number of minutes for the plugin to wait for a response from the host before timing out.

- **CES URL** : Optionally, enter a URL for Compuware Enterprise Services (CES). This URL is used by other Compuware plugins that leverage REST APIs hosted by CES, for example Compuware's ISPW.


## Product Assistance

BMC provides assistance for customers with its documentation, the BMC Support Center web site, and telephone customer support.

### BMC Support Center

You can access online information for BMC products via our Support Center site at [https://support.bmc.com](https://support.bmc.com/). Support Center provides access to critical information about your BMC products. You can review frequently asked questions, read or download documentation, access product fixes, or e-mail your questions or comments. The first time you access Support Center, you must register and obtain a password. Registration is free.

### Contacting Customer Support

At BMC, we strive to make our products and documentation the best in the industry. Feedback from our customers helps us maintain our quality standards. If you need support services, please obtain the following information before calling BMC\'s 24-hour telephone support:

- The Azure pipeline job output that contains any error messages or pertinent information.

- The name, release number, and build number of your product. This information is displayed in the installed extensions page. Apply filter: BMC in order to display all of the installed BMC extension.

- Environment information, such as the operating system and release on which the Topaz CLI is installed.

You can contact BMC in one of the following ways:


#### Web

You can report issues via BMC Support Center: [https://support.bmc.com](https://support.bmc.com/).

Note: Please report all high-priority issues by phone.

### Corporate Web Site

To access BMC site on the Web, go to [https://www.bmc.com/](https://www.bmc.com/). The BMC site provides a variety of product and support information.
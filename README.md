# utm-resource-generator
Customizable utm resource generator - Next.JS

### Setting up local environment

1. `git clone https://github.com/Marigameo/utm-resource-generator.git`
2. cd into the directory
3. `yarn install`
4. `yarn dev`

### Problem statement
It's important for companies to produce awesome content on a regular basis. In order to streamline those marketing activities, businesses use various params to track leads, website activities, etc. UTM parameters are simply tags you add to a URL — when your link is clicked, the tags are sent back to Google Analytics and tracked. With UTM parameters, you can tag your links to gauge the effectiveness of your campaigns and identify the best ways to drive more visitors to your website.

Existing tools are like you generate utm resource sharable with manual inputs like url, content, medium, etc. But, say you are upto generate for a particular campaign. Again you will be manually replacing the medium like linkedin/fb/instagram each time. Other option is to edit on the text field and generate fresh one again. This is time consuming one. 

One of friend uses this on daily basis (almost everyday, multiple times). The requirement is as follows, 

* UI should be highly customizable (eg: I can generate for various medium like fb, insta at a time. I can also add/remove mediums from the list when needed)

* Easy & intuitive to use (less confusing)

### POC

* Customization using checkboxes

* Show only items which are checked (at the moment)

* Other stuffs are saved & appended automatically (until there is a need for change) - Thus not forcing the user to manually enter stuffs repeatedly

* Very simple UI, lightweight

### Initial sketch

[sketch](.github/sketch.jpg)
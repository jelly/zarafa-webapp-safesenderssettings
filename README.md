zarafa-webapp-safesenderssettings
=================================

When you receive e-mails with links to images Zarafa WebApp is not following these links for users safety. This security-feature is not very convenient for end-users as beautiful layouted e-mails may look kind of messed up without images. So users can add senders of e-mails to a “safesenders”-list. If the sender is found on this list, WebApp will automatically follow the links to pictures and directly display the e-mail in the expected layout.
 
While users can be added by 2 mouse-clicks to the “safesenders”-list, it is not so easy to remove them from the list again. This plugin adds a widget to the mail settings which shows an dialog listing all e-mail-addresses in the list. Here you can remove e-mail-addresses added by accident to the list.

Install
-------

1. Download this whole project ([deployed tarball](http://dedi.vdwaa.nl/safesenders-0.1.tar.xz))
2. Extract contents of this plugin to /plugins/safesenders directory (usually /usr/share/zarafa-webapp/plugins)
3. Give read permissions to apache for /plugins/safesenders directory
4. Restart apache, reload webapp.

Screenshot
----------

![](http://dedi.vdwaa.nl/safesenders.png "Safe senders widget")


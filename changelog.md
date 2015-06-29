<!--
This changelog was inspired by http://keepachangelog.com/
Here's my simplifed changelog format:

### 0.1 - 2015-06-25 at 8:40 PM
* Change requests and by whom
* Current issues that are being worked on
* Additions, fixes, and changes
-->


# CHANGELOG

### 2.3.3 - 2015-06-29 at 12:03 PM
* Fixed odd scroll bar that showed up on mobile home page in the jumbotron section.
* Added horizontal blue bars with icons to home page blog posts section per Amy's request.
* Added more space on STM section and changed line-height to reduce the "squashed" look Amy mentioned.

### 2.3.2 - 2015-06-26 at 3:18 PM
### Amy asked for these changes
* Buttons need to have the resting bottom border to be the same color as hover
* Make 404 text H1 and 100px
* Home Page - STM section - make text same as production section
* STM section - make background a little taller to reduce the "Squashed" look
* On home page blog posts section add the top image from blog home page to each blog post
### Fixed
* Amy sent me the background for 404 page
* Built 404 page
* Fixed issues with the footer on 404 page


### 2.3.1 - 2015-06-25 at 3:26 PM
* Cleaned up this changelog
* Updated the button colors with hover colors from Amy Chi
* Cleaned up CSS and HTML code

### 2.3.0 - 2015-06-24 at 3:53 PM
* Home Page Products Section - Set font size larger for copyright and trademark symbols. Then set them to "Superscript" via CSS.
* Centered H3 by adding left margin.
* Contact Us Page - set up page elements to mimic home page "Products" section.
* Re-sized columns so elements would be spaced better.
* Changed font sizes and button size to match "Products" section on home page.
* Amy sent me revised bigger icons.
* Set break points on Table and phone-landscape sizes to the boxes would adjust smoothly.

### 2.2.9 - 2015-06-24 at 8:51 AM
* Contact Us Page - fixed overlap issue on  phone-landscape.
* Amy sent me svg icons. They look great.
* Contact Us Page scales nicely on mobile.

### 2.2.8 - 2015-06-23 at 4:19 PM
* Blog home and post - set mobile version of "Categories" section to span full width.
* Replaced banner ad for mobile with svg Amy sent me. Looks better.
* Started working on the "Contact Us" page
* Using place holders for the images. Amy will send me svgs tomorrow.
* Set the buttons as absolutely positioned to prevent the text from pushing them out of alignment.
* There is a bit of over lap when scaling from phone to tiny. Just need to add some padding/margin.

### 2.2.7 - 2015-06-23 at 8:29 AM
* Copied blog page and made blog-post page
* Removed unnecessary parts
* Added text and wrote style for callout
* Added style for tagbox
* Tested and text scales with viewport changes

### 2.2.6 - 2015-06-19 at 2:10 PM
* Fixed the spacing around the blog social icons and "Read More" button.
* Switch the "Read More" button back to being part of the same unordered list as the social icons.
* Changed the font sizes on the sidebar under Catagories to rems so the fonts will scale with the page.
* Changed the fonts for Subscribe so they will scale with the page.
* Fixed div issue so side bar no longer gets overlapped when the view port changes
* Constrained sidebar on mobile so it would stay consistent.


### 2.2.5 - 2015-06-18 at 3:17 PM
* Blog home page - sidebar - replaced the CSS version of the blog ad with the image Amy Made.
* In the sidebar under subscribe I added in a bootstrap input box with a button on the right. It has on-click highlighting.
* Added spacing between social icons and "Read More" button.
* Created a new unordered list and added the "Read More" button under the social icons.
* For social icons and "Read More" button. I set the UL and LI to display: inline. Items line up next to each other on desktop view and tablet view.
* Set phone view and tiny view to flex-wrap: wrap so the "Read More" button will wrap under the social media icons at smaller screen sizes.
* Fixed "Read More" button by adding setting UL LI IMG to margin-bottom.
* Sidebar still gets cut off when resizing the page from the right in Chrome.


### 2.2.4 - 2015-05-17 at 3:12 PM
* Product page is 80% - Glossary tab alphabet return "Top ^" link doesn't show up on mobile.
* Blog home page - spent most of the day laying out the page and making sure it scales for mobile.
* Set sidebar with categories, ad, and subscribe sections.
* Added class "img-responsive" to large images. Now they scale with the page.
* Changed "Read More" from an image to a css button.
* Set "Read More" button under posts to wrap on mobile.


### 2.2.3 - 2015-06-16 at 4:06 PM
* Started working on the Blog Home page.

### 2.2.2 - 2015-06-16 at 11:12 AM
* Glossary Tab - Still working on getting "Back to Top" link in the correct position.
* Claims Tab - Fixed tables so they scale to the view port
* Claims Tab - Added the mobile version of the text box with three lines of text.
* Claims Tab - Set content text to align left. Centered the text block within the view port.
* Exclusions Tab - Fixed text weight on tiny and phone break points.
* FAQs Tab - fixed accordion hover color and size.
* Product Page is 80%


### 2.2.1 - 2015-06-15 at 3:22 PM
* Fixed Product Page - Claim tab content scaling on each break point
* Fixed Product Page - Glossary tab content scaling on each break point
* Still trying to get the back to top link to show up on the right for all break points.
* Cleaned up CSS files


### 2.2.1 - 2015-06-12 at 11:28 AM
* On home page within the tiny break point I am reducing the font size and adding padding to the products header section.
* Converted Products top image from svg to png.
* Found iPhone5 has problems with large svg images.


### 2.2.0 - 2015-06-12 at 11:16 AM
* On products page > benefits tab. Fixed mobile table so it scales with the page.
* Updated all break points so the table scales correctly.
* Made local backup of update and will push changes to bitbucket.

### 2.1.9 - 2015-06-11 at 9:31 AM
* Cleaned up the structure of both pages.
* Fixed FAQ tab so it displays correctly for each break points.
* Fixing Benefits tab table to resize for each break point.


### 2.1.8 - 2015-06-10 at 2:30 PM
* Testing mobile version on my phone. Found the home page has some spacing on the right. Trying to remove it.
* Fixed some issues with Product Page table sizing.


### 2.1.7 - 2015-06-09 at 4:31 PM
* On Products Page all that needs to be finished is to make the tables under Benefits tab and Claim tab. scale for all six media queries.


### 2.1.6 - 2015-06-09 at 11:58 AM
* Fixed Product page FAQs on desktop size so the text will vertically center in the tab.
* Set the width on the text to 80% so the glyphicons, plus and minus, will float right and vertically center in the tab.
* Fixed Glossary on desktop size as the menu and content area needed to stretch to fit the container.
* Fixed Benefits table so it fits the width of the container.


### 2.1.5 - 2015-06-08 at 1:20 PM
* Fixed nav tab colors
* Fixed nav tab hover colors
* Fixed FAQs text so it wraps on mobile
* Fixed FAQs line height to center text in tab
* Fixed FAQs width to allow Plus and Minus glyphs to float right
* Fixed FAQs tab content text by making it the correct size and weight for mobile
* Trying to get the text spacing and hover states to work on tablet size. Something is causing line-height to change on hover.
* Fixed line height, background color, hover and spacing for tiny, phone, phone-landscape, and tablet


### 2.1.4 - 2015-06-05 at 10:05 AM
* Changed date format on this changelog to YYYY/MM/DD
* Changed nav tabs on all media queries to correct colors
* Checking to make sure all major spacing and menus work
* Focusing on making the nav tab menu hover colors work.


### 2.1.3 - 2015-06-04 at 4:48 pm
* Fixed size of Benefits table
* Changes all tabs to orange with white text (expect for on phone-landscape and phone sizes)
* Fixed Claim tab images, table size, and text size
* Last tab "Quote" resizes with the rest and doesn't break off.
* Fixed text sizing on Glossary


### 2.1.2 - 2015-06-03 at 4:22 PM
* Products page changes - fixed the issue where the jumbotron text was flowing under the tab menu.
* Fixed the text on the glossary tab for all media queries.
* Fixed the top spacing between the top nav and the products page jumbotron.
* On the tiny media query I set the top image to be centered to prevent the chat icon from covering it.


### 2.1.1 - 2015-06-03 at 10:49 AM
* Validated the markup on the products page using https://validator.w3.org/check found errors.
Fixed the errors and revalidated. Passed.
* This help fix some div issues.
* Scott said he tested the home page and it came back good. Only a few minor bugs.
* Products page jumbotron text is sliding behind the tab menu. Tab menu seems to be outside of normal document flow.
* Backed up current version before making changes


### 2.1.0 - 2015-06-02 at 4:35 PM
* Added onload.js link at the bottom of the page for on hover drop down menus.
* Added Chat JavaScript to the bottom of the page.
* Added Chat Icon to top of Jumbotron. Fixed top image on phone landscape size.
* Fixed Nav Tabs so they scale with the page and set "Quote" tab background to orange. #e87d1e;


### 2.1 - 2015-06-02 at 1:01 PM
* Still struggling to fix top spacing difference between Firefox and Chrome.
* It's only about 40px difference between how they calculate height on top of elements.
* No prefix exists for margin-top or padding-top: http://shouldiprefix.com/
* Tried wrapping the jumbotron h1 and h2 in a div with a class. Set it to position: relative. Used top to push it down. Seems to work about the same as margin-top.
* Found a StackOverFlow answer that said to redesign the page so that each div has it's own height and width. That way nothing will need to be given margin-top or padding-top.
* I considered this option but it seems like it wouldn't work within responsive design.
* Thought about coming at the problem backwards and using margin-bottom to push everything down from above.
* That would require a lot of re-work and would break 80% of the page layout.
* I decided to hold off on that level of refactoring for now.
* Bill look at it and I showed him that I am 99.9% done except for this last issue. He said its good enough.
* Made favicon.ico of the HCCMIS logo and added it to the site.
* I uploaded the files to the ftp server / test site.

###  2.0.1 - 2015-06-01 at 10:55 AM
* Added more space around the header logo.
* Researching how to change the navbar mobile menu break point.
* Bill said it is showing up too soon and needs to show up on Phone sized screens or smaller.


###  2.0 - 2015-06-02 at 9:06 AM
* Using Chrome developer tools to find issues with resizing the browser.
* Spent the morning fixing heights so elements no longer "jump" at break points.
* Fixed percentage widths to allow elements to smoothly transition at break points.


### 1.0.4 - 2015-05-29 at 10:51 AM
* "navbar-toggle" was adding "margin-top" to phone-landscape. When resizing the browser this caused the navbar to seem to get fatter and thinner.
* I corrected the sizing to be consistent when scaling the browser.


### 1.0.3 - 2015-05-29 at 9:43 AM
* Transparent boxes move better when re-sizing the browser.
* Header Logo stays consistent in size and scales better when going to mobile size.
* Header Logo needs to be inline with the phone number until the page is resized for mobile.
* Trying alternate solutions to work around the known issue of "margin-top" being displayed differently in Firefox and Chrome.
* Jumbotron background image is not the same height on Firefox and Chrome. Looking at prefixes.
* Looking for options to smooth out transitions between media queries to remove minor jumps.
* I am considering changing the top div class to "container-fluid" as an experiment to see if it helps smooth things out.


### 1.0.2 - 2015-05-20 at 10:07 AM
* Homepage scalability issues 90% corrected; chat icon working correctly.


### 1.0.1 - 2015-05-19 at 10:20 AM
* Noticed that the break points were off for mobile. Set the phone media query to min-width: 300px and max-width: 479px.
* Set page-box container as min-width: 380px and max-width: 1440px. Centered all content with margin: auto trick.
* Went through all 6 media query style sheets and corrected issues with spacing, font sizes, element placement, and images sizes. This way the page looks more consistent at each break point.
* Re-engineered Jumbotron's transparent boxes. Set the parent to relative position and both boxes within as absolutely positioned. This way the boxes will move when the page changes size but elements within the boxes do not move.
* Re-engineered products section on the home page to work better for break points
Set the parent container to relative. Built separate boxes for each product. Set all the elements within each box as absolutely positioned. Now the boxes will move based on break points but the elements inside are static.
* Wrote JavaScript function to make drop-down menu to open on hover.
* Set chat icon as fixed to the right side of the screen. Set width as a percentage for each break point so it will scale with different screen sizes. It now hovers above all other content and stays put when the paged is scrolled up and down.

### 1.0 - 2015-05-15 at 8:24 AM
* Bill suggested putting containers around elements to confine them to a max width. I followed his idea and it worked great.
* Currently applying the fix to all the break points on the home page.

### 0.5 - 2015-05-14 at 8:20 AM
* 90% done on home page
* Added all content and images to product page. I am working on making it mobile
* Working with Bill to fix issues with home page
* Using "Sifter" to document our progress
* Waiting on Blog Designs to be completed

### 0.3 - 2015-05-11 at 8:00 AM
* Home page is due for cascade
* Product page is 80%. Amy is almost done with designs
* Removing "find an agent" page. Is no longer needed.
* Currently fixed tab-to-accordion on mobile
* I'm adding:
    * styling and content
    * Added chat icon to header and positioned it on the right

### 0.1 - 2015-04-10 at 9:15 AM
* I was giving just a single psd for the desktop version of the home page to get started

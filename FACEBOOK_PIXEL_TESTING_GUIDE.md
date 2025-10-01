# 🎯 Facebook Pixel Testing Guide for Sajedar

## ✅ **Your Facebook Pixel is Now Live!**

**Pixel ID**: `1889164861630433`  
**Status**: ✅ Active and tracking  
**Events**: All configured and ready  

---

## 🧪 **Step 1: Install Facebook Pixel Helper**

### Chrome Extension
1. Go to [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Click "Add to Chrome"
3. Pin the extension to your toolbar

### What to Look For
- ✅ Green checkmark = Pixel working correctly
- ⚠️ Yellow warning = Minor issues
- ❌ Red error = Pixel not working

---

## 🔍 **Step 2: Test Your Website**

### 2.1 Visit Your Website
1. Go to `http://localhost:3000` (or your live URL)
2. Open Facebook Pixel Helper
3. **Expected Result**: Green checkmark with "PageView" event

### 2.2 Test Contact Form
1. Scroll to the contact form at the bottom
2. Fill out the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Message: Testing Facebook Pixel
3. Click "Send Message"
4. **Expected Result**: Green checkmark with "Lead" and "Contact" events

### 2.3 Test Demo Page
1. Go to `/demo` page
2. Click on any "Try Demo" button
3. **Expected Result**: Green checkmark with "ViewContent" and "InitiateCheckout" events

### 2.4 Test Tutorial/Article Pages
1. Go to `/tutorials` or `/articles`
2. Click on any tutorial or article
3. **Expected Result**: Green checkmark with "ViewContent" event

---

## 📊 **Step 3: Verify in Facebook Events Manager**

### 3.1 Access Events Manager
1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Select your Pixel: `1889164861630433`
3. Click "Test Events" tab

### 3.2 Real-Time Testing
1. Visit your website
2. Perform the actions above
3. Check Events Manager for real-time events
4. **Expected Result**: Events should appear within 1-2 minutes

---

## 🎯 **Step 4: Events Being Tracked**

### Automatic Events
- ✅ **PageView**: Every page visit
- ✅ **Lead**: Contact form submissions
- ✅ **Contact**: Contact form submissions

### Custom Events
- ✅ **ViewContent**: Demo/tutorial/article views
- ✅ **InitiateCheckout**: Demo button clicks
- ✅ **DemoView**: Demo page visits
- ✅ **TutorialView**: Tutorial page visits
- ✅ **ArticleView**: Article page visits

### Social Media Events
- ✅ **WhatsAppClick**: WhatsApp button clicks
- ✅ **LinkedInClick**: LinkedIn button clicks
- ✅ **FacebookClick**: Facebook button clicks
- ✅ **YouTubeClick**: YouTube button clicks
- ✅ **TikTokClick**: TikTok button clicks
- ✅ **DiscordClick**: Discord button clicks

---

## 🚀 **Step 5: Create Custom Audiences**

### 5.1 Website Visitors
1. Go to Facebook Ads Manager → Audiences
2. Create Custom Audience → Website
3. Select "All website visitors" in the last 30 days
4. Name: "Sajedar Website Visitors"

### 5.2 Lead Form Submissions
1. Create Custom Audience → Website
2. Select "People who visited specific pages"
3. Add URL: `https://sajedar.com/Contact`
4. Name: "Sajedar Lead Form Submissions"

### 5.3 Demo Page Visitors
1. Create Custom Audience → Website
2. Select "People who visited specific pages"
3. Add URL: `https://sajedar.com/demo`
4. Name: "Sajedar Demo Page Visitors"

---

## 📈 **Step 6: Set Up Conversion Events**

### 6.1 Lead Conversion
1. Go to Events Manager → Create Event
2. Event Type: Lead
3. Value: $0 (or estimated lead value)
4. Attribution: 1-day view, 7-day click

### 6.2 Contact Conversion
1. Event Type: Contact
2. Value: $0
3. Attribution: 1-day view, 7-day click

---

## 🎯 **Step 7: Create Retargeting Campaigns**

### 7.1 Website Visitors Retargeting
- **Audience**: Sajedar Website Visitors
- **Objective**: Lead Generation
- **Ad Copy**: "Ready to build your AI chatbot? Get started today!"

### 7.2 Demo Page Visitors Retargeting
- **Audience**: Sajedar Demo Page Visitors
- **Objective**: Lead Generation
- **Ad Copy**: "Saw our demos? Let's build your custom solution!"

### 7.3 Lead Form Abandoners
- **Audience**: Website visitors who didn't convert
- **Objective**: Lead Generation
- **Ad Copy**: "Don't miss out! Get your free AI chatbot consultation."

---

## 🔧 **Troubleshooting**

### Common Issues & Solutions

#### ❌ **Pixel Not Firing**
- **Check**: Facebook Pixel Helper shows no events
- **Solution**: Verify Pixel ID is correct in layout.tsx
- **Check**: Browser console for JavaScript errors

#### ⚠️ **Events Not Appearing in Events Manager**
- **Check**: Wait 1-2 minutes for events to appear
- **Solution**: Clear browser cache and try again
- **Check**: Ad blockers might be blocking the pixel

#### ❌ **Contact Form Events Not Firing**
- **Check**: Form submission is working
- **Solution**: Verify ContactSection.tsx has Facebook Pixel tracking
- **Check**: Browser console for JavaScript errors

#### ⚠️ **Demo Page Events Not Firing**
- **Check**: DemoCard.tsx component is working
- **Solution**: Verify import paths are correct
- **Check**: Client-side JavaScript is enabled

---

## 📊 **Success Metrics**

### Your Facebook Pixel is Working When:
- ✅ Facebook Pixel Helper shows green checkmarks
- ✅ Events appear in Facebook Events Manager
- ✅ Custom Audiences are building
- ✅ Retargeting campaigns can target your audiences
- ✅ Conversion tracking is working

### Key Metrics to Monitor:
- **PageView Events**: Should fire on every page visit
- **Lead Events**: Should fire when contact forms are submitted
- **ViewContent Events**: Should fire when demos are clicked
- **Custom Audiences**: Should build over time with visitor data

---

## 🎉 **Next Steps**

1. **Test Everything**: Use the testing steps above
2. **Monitor Events**: Check Facebook Events Manager daily
3. **Create Audiences**: Set up Custom Audiences for retargeting
4. **Launch Campaigns**: Create retargeting and lookalike campaigns
5. **Optimize**: Use conversion data to optimize your ads

---

## 📞 **Support**

If you need help:
1. Check Facebook Business Help Center
2. Use Facebook Pixel Helper for debugging
3. Review browser console for JavaScript errors
4. Test in incognito mode to avoid ad blockers

---

**Your Facebook Pixel is now live and ready to track conversions! 🚀**

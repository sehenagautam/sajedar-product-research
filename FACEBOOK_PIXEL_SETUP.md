# Facebook Pixel Setup Guide for Sajedar

## 🎯 Overview
This guide explains how to set up and configure Facebook Pixel for your Sajedar landing page to track conversions, retarget visitors, and optimize Facebook ads.

## 📋 Prerequisites
1. Facebook Business Manager account
2. Facebook Page for your business
3. Access to Facebook Ads Manager

## 🚀 Step 1: Create Facebook Pixel

### 1.1 Access Facebook Events Manager
1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Click "Connect Data Sources" → "Web"
3. Select "Facebook Pixel" and click "Connect"

### 1.2 Configure Your Pixel
1. **Pixel Name**: `Sajedar Website Pixel`
2. **Website URL**: `https://sajedar.com`
3. **Industry**: Technology or Business Services
4. Click "Create"

### 1.3 Get Your Pixel ID
- Copy the Pixel ID (looks like: `123456789012345`)
- You'll need this for the implementation

## 🔧 Step 2: Update Your Code

### 2.1 Replace Pixel ID
1. Open `src/config/facebook-pixel.ts`
2. Replace `YOUR_PIXEL_ID_HERE` with your actual Pixel ID:
```typescript
export const FACEBOOK_PIXEL_ID = '123456789012345';
```

### 2.2 Update Layout.tsx
1. Open `src/app/layout.tsx`
2. Replace `YOUR_PIXEL_ID_HERE` with your actual Pixel ID in the Facebook Pixel code

## 📊 Step 3: Events Being Tracked

### Standard Events
- **PageView**: Automatically tracked on all pages
- **Lead**: When users submit contact form
- **Contact**: When users submit contact form
- **ViewContent**: When users view demos, tutorials, articles
- **InitiateCheckout**: When users click demo links

### Custom Events
- **DemoView**: When users view demo page
- **TutorialView**: When users view tutorials
- **ArticleView**: When users view articles
- **DeveloperApplication**: When users visit developer page
- **WhatsAppClick**: When users click WhatsApp links
- **LinkedInClick**: When users click LinkedIn links
- **FacebookClick**: When users click Facebook links
- **YouTubeClick**: When users click YouTube links
- **TikTokClick**: When users click TikTok links
- **DiscordClick**: When users click Discord links

## 🧪 Step 4: Testing Your Pixel

### 4.1 Facebook Pixel Helper
1. Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) Chrome extension
2. Visit your website
3. Check that events are firing correctly

### 4.2 Facebook Events Manager
1. Go to Events Manager → Test Events
2. Visit your website and perform actions
3. Verify events appear in real-time

### 4.3 Test Events
- Visit homepage → Should see PageView
- Submit contact form → Should see Lead + Contact
- Click demo links → Should see ViewContent + InitiateCheckout
- Visit demo page → Should see DemoView

## 🎯 Step 5: Create Custom Audiences

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

## 📈 Step 6: Set Up Conversions

### 6.1 Conversion Events
1. Go to Facebook Ads Manager → Events Manager
2. Click "Create Event" → "From the Pixel"
3. Set up conversion events:
   - **Lead**: Value $0, Attribution: 1-day view, 7-day click
   - **Contact**: Value $0, Attribution: 1-day view, 7-day click
   - **ViewContent**: Value $0, Attribution: 1-day view, 7-day click

### 6.2 Value Optimization
- Set up value-based optimization for Lead events
- Assign estimated customer lifetime value
- Use for better ad optimization

## 🔄 Step 7: Retargeting Campaigns

### 7.1 Website Visitors Retargeting
- Target: Sajedar Website Visitors
- Objective: Lead Generation
- Ad copy: "Ready to build your AI chatbot? Get started today!"

### 7.2 Demo Page Visitors Retargeting
- Target: Sajedar Demo Page Visitors
- Objective: Lead Generation
- Ad copy: "Saw our demos? Let's build your custom solution!"

### 7.3 Lead Form Abandoners
- Target: Website visitors who didn't convert
- Objective: Lead Generation
- Ad copy: "Don't miss out! Get your free AI chatbot consultation."

## 📊 Step 8: Analytics & Optimization

### 8.1 Key Metrics to Track
- **Conversion Rate**: Leads / Website Visitors
- **Cost Per Lead (CPL)**: Ad Spend / Leads
- **Return on Ad Spend (ROAS)**: Revenue / Ad Spend
- **Click-Through Rate (CTR)**: Clicks / Impressions

### 8.2 Optimization Strategies
- A/B test ad creatives
- Optimize for Lead events
- Use lookalike audiences
- Retarget high-intent visitors

## 🛠️ Troubleshooting

### Common Issues
1. **Pixel not firing**: Check Pixel ID is correct
2. **Events not tracking**: Verify Facebook Pixel Helper
3. **Delayed events**: Check attribution windows
4. **Duplicate events**: Ensure single Pixel implementation

### Debug Tools
- Facebook Pixel Helper Chrome extension
- Facebook Events Manager Test Events
- Browser Developer Tools Network tab

## 📞 Support
If you need help with Facebook Pixel setup:
1. Check Facebook Business Help Center
2. Contact Facebook Business Support
3. Review Facebook Pixel documentation

## �� Success Metrics
Your Facebook Pixel is working correctly when you see:
- ✅ PageView events firing on all pages
- ✅ Lead events when contact forms are submitted
- ✅ ViewContent events when demos are clicked
- ✅ Custom events for specific actions
- ✅ Real-time data in Events Manager

---

**Next Steps:**
1. Replace `YOUR_PIXEL_ID_HERE` with your actual Pixel ID
2. Test the implementation using Facebook Pixel Helper
3. Set up Custom Audiences in Facebook Ads Manager
4. Create retargeting campaigns
5. Monitor and optimize performance

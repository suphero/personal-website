---
# An instance of the Contact widget.
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 50

title: Get in touch!
subtitle: Feel free to contact me :)

content:
  # Automatically link email and phone or display as text?
  autolink: true

  # Email form provider
  form:
    provider: 0
    formspree:
      id:
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: true

  # Contact details (edit or remove options as required)
  email: harunsokullu@gmail.com
  contact_links:
    - icon: github
      icon_pack: fab
      name: Check out some code
      link: https://github.com/suphero
    - icon: twitter
      icon_pack: fab
      name: DM Me
      link: https://twitter.com/suphero
    - icon: instagram
      icon_pack: fab
      name: See some pictures of my life
      link: https://instagram.com/suphero
    - icon: telegram
      icon_pack: fab
      name: Telegram Me
      link: https://t.me/suphero

design:
  columns: '2'
---

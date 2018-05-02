---
layout: form
title: Contact us
form: 
  name: contact
  recaptcha: true
  nexturl: contact-thankyou
  buttons:
    - type: submit
      label: Send
  fields:
    - name: name
      label: Your name
      type: single
      required: true
    - name: email
      label: Your email
      type: single
      required: true
      validation: [email]
    - name: phone
      label: Your phone number (optional)
      type: single
    - name: message
      label: Your message
      type: multi   
      required: true
---

import { defineField, defineType } from 'sanity';

     export default defineType({
       name: 'inquiry',
       title: 'Inquiry',
       type: 'document',
       fields: [
         defineField({
           name: 'name',
           title: 'Name',
           type: 'string',
           validation: (Rule) => Rule.required(),
         }),
         defineField({
           name: 'email',
           title: 'Email',
           type: 'string',
           validation: (Rule) => Rule.required().email(),
         }),
         defineField({
           name: 'businessName',
           title: 'Business Name',
           type: 'string',
         }),
         defineField({
           name: 'source',
           title: 'Where Did You Hear About Us',
           type: 'string',
         }),
         defineField({
           name: 'purpose',
           title: 'Purpose',
           type: 'text',
           validation: (Rule) => Rule.required(),
         }),
         defineField({
           name: 'submittedAt',
           title: 'Submitted At',
           type: 'datetime',
           validation: (Rule) => Rule.required(),
         }),
       ],
     });
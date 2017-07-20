import './docx.html'


Template.docx.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.docx.events({
  "click .toaster": function(event, template){
    // Define the pdf-document
    var docDefinition = {
      header: 'simple text',

      footer: {
        columns: [
          'Left part',
          { text: 'Right part', alignment: 'right', margin: 5 }
        ]
      },
      content: [
     // if you don't need styles, you can use a simple string to define a paragraph
     'This is a standard paragraph, using default style',

     // using a { text: '...' } object lets you set styling properties
     { text: 'This paragraph will have a bigger font', fontSize: 15 },

     // if you set pass an array instead of a string, you'll be able
     // to style any fragment individually
     {
       text: [
         'This paragraph is defined as an array of elements to make it possible to ',
         { text: 'restyle part of it and make it bigger ', fontSize: 15 },
         'than the rest.'
       ]
     },
     {
      table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 1,
        widths: [ '*', 'auto', 100, '*' ],

        body: [
          [ 'First', 'Second', 'Third', 'The last one' ],
          [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
          [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
        ]
      }
    }
   ]};

    // Start the pdf-generation process
    pdfMake.createPdf(docDefinition).open('optionalName.pdf');
  }
});

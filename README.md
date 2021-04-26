# sentiment-analysis-ng
Demo for Angular/ Dot Net Core

Project description

The Sentiments database contains the “Lexicon” table. 
The “Lexicon” table is a lexicon that contains words and their sentiment scores from the range [-1, 1]. 
If the value is greater than zero, the word is considered to have a positive connotation, if the value 
is less than zero, the word is considered to have a negative connotation, and if the value is zero, the
word is considered neutral and does not contribute to emotional content.

The application should contain two tabs. The “Lexicon” tab allows you to view lexicons, enter new words
and their sentiment ratings, delete and edit existing ones. Words with a positive connotation should be 
coloured green, and words with a negative connotation should be coloured red. The filter can narrow the
set to only positive or only negative words. The “Calculation” tab allows you to enter a document and 
calculate its overall sentiment score. The document is entered in two ways: by entering text in the 
appropriate field or by uploading. The document is a .txt file.


* Install dependencies

```console
npm install
```

* Restore dotnet packages
```console
dotnet restore
```

* Run the app
```console
dotnet run
```

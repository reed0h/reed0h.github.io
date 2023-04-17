function formatAuthors(authors) {
    if (!authors) {
        return '';
    }

    const authorList = authors.split(',').map(a => a.trim());
    const formattedAuthors = authorList.map((author, index) => {
        const isLastAuthor = index === authorList.length - 1;
        return isLastAuthor && index !== 0 ? `& ${author}` : author;
    });

    return formattedAuthors.join(', ');
}

document.getElementById('generate-button').addEventListener('click', function() {
    const authors = formatAuthors(document.getElementById('authors').value.trim());
    const year = document.getElementById('year').value.trim();
    const month = document.getElementById('month').value.trim();
    const day = document.getElementById('day').value.trim();
    const webpageTitle = document.getElementById('webpageTitle').value.trim();
    const siteName = document.getElementById('siteName').value.trim();
    const url = document.getElementById('url').value.trim();

    const citation = `${authors} (${year}, ${month}, ${day}). ${webpageTitle}. ${siteName}. ${url}`;
    document.getElementById('citation').textContent = citation;
});

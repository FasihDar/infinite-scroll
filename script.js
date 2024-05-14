$(document).ready(function () {
    function generateRandomText() {
        var texts = [
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ];

        texts.sort(function () {
            return 0.5 - Math.random();
        });

        return texts;
    }

    function generateRandomHeadings() {
        var headings = [
            "Lorem ipsum dolor sit amet",
            "Consectetur adipiscing elit",
            "Sed do eiusmod tempor incididunt",
            "Ut enim ad minim veniam",
            "Duis aute irure dolor in reprehenderit",
            "Excepteur sint occaecat cupidatat non proident"
        ];

        headings.sort(function () {
            return 0.5 - Math.random();
        });

        return headings;
    }

    function generateBlogItem(index) {
        var blogHTML = '<div class="blog-item">';
        blogHTML += '<div class="circle">' + (index + 1) + '</div>';

        var randomHeadings = generateRandomHeadings();
        blogHTML += '<h2 class="blog-heading">' + randomHeadings[index % randomHeadings.length] + '</h2>';

        var randomTexts = generateRandomText();
        blogHTML += '<p>' + randomTexts[index % randomTexts.length] + '</p>';

        blogHTML += '</div>';
        return blogHTML;
    }

    var initialBlogCount = 10;
    for (var i = 0; i < initialBlogCount; i++) {
        $('#blogContainer').append(generateBlogItem(i));
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            var additionalBlogCount = 5;
            for (var i = 0; i < additionalBlogCount; i++) {
                $('#blogContainer').append(generateBlogItem(i + initialBlogCount));
            }
            initialBlogCount += additionalBlogCount;
        }
    });
});

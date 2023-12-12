
/******************************************** */
/***** EXHBITIONS MUSEUMS SEARCH FUNCTION ****/

$(document).ready(function () {
  // Function to handle the search
  $("#user_search").on("input", function () {
      var searchValue = $(this).val().toLowerCase();
      searchCards(searchValue);
  });

  // Common function to search and filter cards
  function searchCards(searchValue) {
      // Show all card items initially
      $(".card-item").show();

      // Iterate through each card-item
      $(".card-item").each(function () {
          var cardText = $(this).text().toLowerCase();

          // Hide the card if it doesn't match the search value
          if (!cardText.includes(searchValue)) {
              $(this).hide();
          }
      });
  }
});
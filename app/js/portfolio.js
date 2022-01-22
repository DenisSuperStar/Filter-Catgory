angular
  .module("portfolioApp", [])
  .controller("selectFilter", ($scope, $http) => {
    $scope.selected = "All";

    $http({
      method: "GET",
      url: "./allCategories.json",
    }).then((res) => {
      const { data } = res;

      $scope.allItems = data;
    });

    $http({
      method: "GET",
      url: "./websites.json",
    }).then((res) => {
      const { data } = res;

      $scope.webItems = data;
    });

    $http({
      method: "GET",
      url: "./flayers.json",
    }).then((res) => {
      const { data } = res;

      $scope.flayerItems = data;
    });

    $http({
      method: "GET",
      url: "./businessCategories.json",
    }).then((res) => {
      const { data } = res;

      $scope.businessItems = data;
    });

    $scope.portfolioStyles = {
      tabContent: {
        padding: 0
      },
      item: {
        width: 'max-content',
        height: 'max-content'
      }
    }
  });

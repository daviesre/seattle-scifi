import { Injectable } from 'angular2/core';


@Injectable()
export class FileDataService {
  getFileData($scope, $http) {
  console.log("In file data service");
  $scope.fileData = [];
  $http.get('/fileData.txt')
      .success(function(data, status, headers, config) {
          if (data && status === 200) {
              $scope.fileData = data.split('|');
              console.log($scope.fileData);
          }
      });
  };
}


(function () {
    "use strict";

    angular
        .module("MemberApp")
        .controller("memberController", memberController);

    // memberController.$inject = ['$scope']
    function memberController() {
        var member = this;

        member.info = {
            select: "Mrs", memberName: "Ahmed", releationSelect: "S",
            relationShip: "Single", dob: new Date(), weddingDate: new Date(),
            panCard: 25369, email: "ahmed@gs.com",
            guardianRelation: "M", guardianName: "Eid", guardianContact: "Ali",
            signdPerson: "Mohamed", familyCode: 25896, is: "is New",
            aadharCard: 586987, isActive: true
        };
        member.Mss = false;
        member.master = false;
        member.choosePerson = function () {
            if(member.info.select == "M/s") {
                member.Mss = true;
                member.master = false;
            }
            else if (member.info.select == "Master"){
                member.Mss = false;
                member.master = true;
            }
            else {
                member.Mss = false;
                member.master = false;
            }
        }
    }

})();

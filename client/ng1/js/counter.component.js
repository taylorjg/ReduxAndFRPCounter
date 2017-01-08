import angular from 'angular';
import * as actions from './actions';

export default function counter() {
    return {
        template: `
            <button ng-click="$ctrl.increment()">Up</button>
            <button ng-click="$ctrl.decrement()">Down</button>
            <span>{{ $ctrl.counter }}</span>`,
        controller: CounterController
    };
}

CounterController.$inject = ['$scope', '$ngRedux'];

function CounterController($scope, $ngRedux) {

    const unsubscribe = $ngRedux.connect(mapStateToThis, actions)(this);
    $scope.$on('$destroy', unsubscribe);

    function mapStateToThis(state) {
        return {
            counter: state
        };
    }
}

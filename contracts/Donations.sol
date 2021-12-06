pragma solidity >= 0.8.0 < 0.9.0;

// Импорт библиотеки для проверки роли владельца контракта
import "@openzeppelin/contracts/access/Ownable.sol";

contract Donation is Ownable {
  // Сопоставление донатеров и задоначеных сумм
  mapping(address => uint) public donators;
  // Массив адресов донатеров
  address[] public donatorsAddresses;
  // Все задоначенные средства
  uint public allFunds;

  // Модификатор для проверки возможности отправить данную сумму
  modifier enughFunds(uint amount) {
    require(amount < allFunds, "Insufficient funds");
    _;
  }

  // Функция доната
  function Donate() public payable {
     require(msg.value >= 0.001 ether);
     donatorsAddresses.push(msg.sender);
     allFunds += msg.value;
     donators[msg.sender] = msg.value;
  }

  // Функция вывода задоначеных средств, доступно только владельцу контракта
  function Withdrow(address payable to, uint amount) public onlyOwner {
    to.transfer(amount);
    allFunds -= amount;
  }

  // Вывод всех доступных средств
  function WithdrowAll(address payable to) public onlyOwner {
    to.transfer(address(this).balance);
    allFunds = 0;
  }
}

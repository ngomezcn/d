# % block="CardCode"
# % block="CardName"
class AlarmSound(Enum):
    CardCode = 0
    CardName = 1
@namespace
class BusinessOne:
    """
    
    Address led
    
    """
    # % blockId=BusinessPartner_B
    # % block="BusinessPartner $sound"
    # % expandableArgumentMode="toggle"
    def test(sound: AlarmSound):
        return 1
    """
    
    Address led
    
    """
    # % blockId=foo_B
    # % block="fijar $callback a $value"
    def foo(callback: number, value: any):
        pass
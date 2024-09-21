export class PeopleEntryClass {
    static lastId = 0;

    constructor(props) {
        this.id = this.generateId();
        this.group = props.group;
        this.originAirport = props.originAirport;
        this.departAfter = props.departAfter;
        this.arriveBefore = props.arriveBefore;
        this.cabinClass = props.cabinClass;
        this.directFlight = props.directFlight;
    }

    generateId() {
        PeopleEntryClass.lastId += 1;
        return PeopleEntryClass.lastId;
    }
}
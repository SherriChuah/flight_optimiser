import { PeopleEntryClass } from './peopleEntryDataModel'

export class PeopleSearchDetails {
    static lastId = 0;

    static PeopleSearchDetailsList = [];

    static generateId() {
        PeopleSearchDetails.lastId += 1;
        return PeopleSearchDetails.lastId;
    }

    static reindexList(list) {
        PeopleSearchDetails.PeopleSearchDetailsList =  list.map((item, index) => ({
            ...item,
            id: index + 1
        }));
    }

    static deleteEntry(id) {
        const index = PeopleSearchDetails.PeopleSearchDetailsList.findIndex((item) => {
            if (item.id == parseInt(id) + 1) {
                return item.id;
            }
        });

        if (index !== -1) {
            PeopleSearchDetails.PeopleSearchDetailsList.splice(index, 1);
            console.log(`People search details with id ${id} deleted.`);
            PeopleSearchDetails.lastId -= 1;
            PeopleSearchDetails.reindexList(PeopleSearchDetails.PeopleSearchDetailsList);

        } else {
            console.error(`People search details with id ${id} not found.`);
        }
    }

    static addEntry(data) {
        data['id'] = PeopleSearchDetails.generateId();
        const newEntry = new PeopleEntryClass(data);
        PeopleSearchDetails.PeopleSearchDetailsList.push(newEntry);
        return newEntry;
    }

    static editEntry(data) {
        const itemToUpdate = PeopleSearchDetails.PeopleSearchDetailsList[parseInt(data.id) - 1];

        itemToUpdate.group = data.group;
        itemToUpdate.originAirport = data.originAirport;
        itemToUpdate.departAfter = data.departAfter;
        itemToUpdate.arriveBefore = data.arriveBefore;
        itemToUpdate.cabinClass = data.cabinClass;
        itemToUpdate.directFlight = data.directFlight;
    }

    static getDetails() {
        return PeopleSearchDetails.PeopleSearchDetailsList;
    }
}

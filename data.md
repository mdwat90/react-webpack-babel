BULLETIN APP DATA MODEL

## Introduction:

- When modeling data for a NoSQL DB structure, it is important to remember that we are approaching from a different perspective than relational DB structure.
- Our focus for NoSQL DB is “flattening” our data. We need to focus on how our data is going to be retrieved and stored from the database in order to make proper structural decisions.

### Proposed Data Structure:

```
users: {
    user-id: {
        created-at: timestamp,
        groups: [group-id],
        documents: [document-id],
        current-document: document-id,
        posted-announcements: [
            announcement-id: {
                posted: true,
                draft: false
            }
        ],
        drafted-announcements: [
            announcement-id: {
                posted: false,
                draft: true
            }
        ]
    }
}

groups: {
    group-id: {
        created-at: timestamp,
        users: [user-id],
        posted-anouncements: [
            announcement-id: {
                posted: true,
                draft: false
            }
        ],
    }
}

documents: {
    document-id: {
        created-at: timestamp,
        title: title,
        body: body,
        logo: logo,
        ?template: template-id?
    }
}

announcements: {
    announcement-id: {
        created-at: timestamp,
        title: title,
        body: body,
        more-info: more-info,
        ...???
    }
}

templates: {
    template-id: {
        created-at: timestamp,
        ?created-by: user-id?,
        html: html
    }
}
```

### THINGS TO CONSIDER:

- Current `document-id` will be saved to `user.current-document` and `timestamp` will be updated on document itself when document is closed OR user is loggedout.
- How should we make association between documents and templates? Inject document info (e.g. `title`, `body`, etc.) after template is loaded?
- Actions:
  - On finished typing, automatically save in cache?
  - When user signs out or browser window is closed, save to db?

### FIREBASE REALTIME DB NOTES:

- We can provide unique key id’s using [push()](https://firebase.google.com/docs/reference/js/firebase.database.Reference#push) method.
- “If you create your own keys, they must be UTF-8 encoded, can be a maximum of 768 bytes, and cannot contain ., \$, #, [, ], /, or ASCII control characters 0-31 or 127. You cannot use ASCII control characters in the values themselves, either.”
- "Because the Firebase Realtime Database allows nesting data up to 32 levels deep, you might be tempted to think that this should be the default structure. However, when you fetch data at a location in your database, you also retrieve all of its child nodes. In addition, when you grant someone read or write access at a node in your database, you also grant them access to all data under that node. Therefore, in practice, it's best to keep your data structure as flat as possible.”
- “When building apps, it's often better to download a subset of a list. This is particularly common if the list contains thousands of records.”

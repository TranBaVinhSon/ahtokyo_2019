// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    full_name
    email
    longitude
    latitude
    avatar
    shelter {
      id
      longitude
      latitude
      medical_kit
      food_kit
      goverment_id
      photo
      goverment {
        id
        name
      }
      users {
        nextToken
      }
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      full_name
      email
      longitude
      latitude
      avatar
      shelter {
        id
        longitude
        latitude
        medical_kit
        food_kit
        goverment_id
        photo
      }
    }
    nextToken
  }
}
`;
export const getShelter = `query GetShelter($id: ID!) {
  getShelter(id: $id) {
    id
    longitude
    latitude
    medical_kit
    food_kit
    goverment_id
    photo
    goverment {
      id
      name
      shelters {
        nextToken
      }
    }
    users {
      items {
        id
        full_name
        email
        longitude
        latitude
        avatar
      }
      nextToken
    }
  }
}
`;
export const listShelters = `query ListShelters(
  $filter: ModelShelterFilterInput
  $limit: Int
  $nextToken: String
) {
  listShelters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      longitude
      latitude
      medical_kit
      food_kit
      goverment_id
      photo
      goverment {
        id
        name
      }
      users {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getGoverment = `query GetGoverment($id: ID!) {
  getGoverment(id: $id) {
    id
    name
    shelters {
      items {
        id
        longitude
        latitude
        medical_kit
        food_kit
        goverment_id
        photo
      }
      nextToken
    }
  }
}
`;
export const listGoverments = `query ListGoverments(
  $filter: ModelGovermentFilterInput
  $limit: Int
  $nextToken: String
) {
  listGoverments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      shelters {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const searchUsers = `query SearchUsers(
  $filter: SearchableUserFilterInput
  $sort: SearchableUserSortInput
  $limit: Int
  $nextToken: Int
) {
  searchUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      full_name
      email
      longitude
      latitude
      avatar
      shelter {
        id
        longitude
        latitude
        medical_kit
        food_kit
        goverment_id
        photo
      }
    }
    nextToken
  }
}
`;
export const searchShelters = `query SearchShelters(
  $filter: SearchableShelterFilterInput
  $sort: SearchableShelterSortInput
  $limit: Int
  $nextToken: Int
) {
  searchShelters(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      longitude
      latitude
      medical_kit
      food_kit
      goverment_id
      photo
      goverment {
        id
        name
      }
      users {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const searchGoverments = `query SearchGoverments(
  $filter: SearchableGovermentFilterInput
  $sort: SearchableGovermentSortInput
  $limit: Int
  $nextToken: Int
) {
  searchGoverments(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      shelters {
        nextToken
      }
    }
    nextToken
  }
}
`;

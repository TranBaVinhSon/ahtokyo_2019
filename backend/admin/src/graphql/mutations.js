// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createShelter = `mutation CreateShelter($input: CreateShelterInput!) {
  createShelter(input: $input) {
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
export const updateShelter = `mutation UpdateShelter($input: UpdateShelterInput!) {
  updateShelter(input: $input) {
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
export const deleteShelter = `mutation DeleteShelter($input: DeleteShelterInput!) {
  deleteShelter(input: $input) {
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
export const createGoverment = `mutation CreateGoverment($input: CreateGovermentInput!) {
  createGoverment(input: $input) {
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
export const updateGoverment = `mutation UpdateGoverment($input: UpdateGovermentInput!) {
  updateGoverment(input: $input) {
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
export const deleteGoverment = `mutation DeleteGoverment($input: DeleteGovermentInput!) {
  deleteGoverment(input: $input) {
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

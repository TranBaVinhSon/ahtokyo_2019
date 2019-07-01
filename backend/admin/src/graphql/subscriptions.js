// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateShelter = `subscription OnCreateShelter {
  onCreateShelter {
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
export const onUpdateShelter = `subscription OnUpdateShelter {
  onUpdateShelter {
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
export const onDeleteShelter = `subscription OnDeleteShelter {
  onDeleteShelter {
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
export const onCreateGoverment = `subscription OnCreateGoverment {
  onCreateGoverment {
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
export const onUpdateGoverment = `subscription OnUpdateGoverment {
  onUpdateGoverment {
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
export const onDeleteGoverment = `subscription OnDeleteGoverment {
  onDeleteGoverment {
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

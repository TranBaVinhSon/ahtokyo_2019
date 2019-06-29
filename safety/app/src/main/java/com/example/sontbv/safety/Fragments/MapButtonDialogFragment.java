package com.example.sontbv.safety.Fragments;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.BottomSheetDialogFragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.sontbv.safety.R;

public class MapButtonDialogFragment extends BottomSheetDialogFragment {

    public static MapButtonDialogFragment newInstance() {
        return new MapButtonDialogFragment();
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater,
                             @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_mapbutton, container, false);

        return view;

    }
}

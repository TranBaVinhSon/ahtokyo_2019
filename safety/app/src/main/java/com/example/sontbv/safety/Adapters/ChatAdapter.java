package com.example.sontbv.safety.Adapters;

import android.graphics.Movie;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.example.sontbv.safety.R;

import java.util.List;

public class ChatAdapter extends RecyclerView.Adapter<ChatAdapter.MyViewHolder> {

    private List<String> chatList;

    public class MyViewHolder extends RecyclerView.ViewHolder {
        public TextView mess, year, genre;

        public MyViewHolder(View view) {
            super(view);
            mess = (TextView) view.findViewById(R.id.message);
        }
    }


    public ChatAdapter(List<String> chatList) {
        this.chatList = chatList;
    }

    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.chat_list_row_2, parent, false);

        return new MyViewHolder(itemView);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public void onBindViewHolder(MyViewHolder holder, int position) {
        String mess = chatList.get(position);
        holder.mess.setText(mess);
    }

    @Override
    public int getItemCount() {
        return chatList.size();
    }
}